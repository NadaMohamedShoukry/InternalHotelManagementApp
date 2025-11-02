import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins can not be loaded!");
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  // optional chaning ?. => because image might not be a string so we cant call the function
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  //We also replace any slashes in the cabin name to prevent Supabase from creating folders based on slashes in the file name.
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://jizkjcakxvhiuxjzvnho.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // 1 - Create/Edit the cabin.
  let query = supabase.from("cabins");
  //A- Create Cabin
  if (!id)
    // this will work because the data we are going to pass has the same shape as the data on the database
    query = query.insert([{ ...newCabin, image: imagePath }]);

  //B- Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Cabins can not be added!");
  }
  //2 - Upload the image.
  //if the image has a path (already uploaded to the cabin) return
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3 - Delete the cabin if there was an error uploadig image.
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Image can not be uploaded!");
  }
  return data;
}
export async function deleteCabin(id) {
  //select the row that we want to delete

  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins can not be deleted!");
  }
  return data;
}

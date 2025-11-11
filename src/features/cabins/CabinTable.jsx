/* eslint-disable no-unused-vars */
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useGetCabins } from "./useGetCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { cabins, isLoading } = useGetCabins();
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("discount") || "all";
  let filterCabins = cabins || [];
  if (filterValue === "all") filterCabins = cabins;
  if (filterValue === "no-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);

  //Sort
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  console.log(modifier);
  const sortedCabins = filterCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        {/* Sol 1. */}
        {/* <Table.Body>
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
          ))}
          </Table.Body> */}
        {/* Sol 2.
      //apply render prop pattern */}
        <Table.Body
          //  data={cabins}
          //data={filterCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;

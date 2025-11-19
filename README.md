# The Wild Oasis - internal hotel management system
Single Page Application built with React.js and Vite
## Try it
[The Wild Oasis - Hotel System](https://wild-oasis-hotel-management-system.netlify.app/dashboard)

### Feature Categories:

- Authentication: Includes login and user account creation.
- Cabins: Managing cabin details.
- Bookings: Handling reservations.
- Check-ins and Check-outs: Allowing hotel employees to check guests in and out.
- Guests: Managing guest information.
- Dashboard: Displaying statistics and charts.
- Settings: Allowing users to configure application settings.

### Application Pages:

- Dashboard Page: The homepage combining multiple features.
- Bookings Page: Displays current, past, and future bookings.
- Cabins Page: Allows viewing, editing, and deleting cabins.
- Check-in Page: Used to check guests in, accessed via a booking ID parameter.
- Settings Page: For users to define application settings.
- Signup Page: For user registration, though signups happen inside the app by existing users.
- Login Page: The default homepage if the user is not logged in.
- User Account Update Page: To update name, avatar, password, and other account details.

### Technology Decisions:

- Routing: React Router, the gold standard for SPAs.
- Styling: styled-components, a popular library for writing CSS inside JavaScript and React components. Used by companies like IMDB, Spotify, and Coinbase.
- Remote State Management: React Query, which offers features like caching, automatic refetching, prefetching, and offline support.
- UI State Management: React Context API, since there is minimal UI state.
- Form Management: React Hook Form, to simplify form state and error handling.
- Additional libraries:
      React Icons.
      React Hot Toast for notifications.
      Recharts for charts.
      date-fns for date manipulation.
      Supabase for backend API and data storage.

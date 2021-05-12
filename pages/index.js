import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "sdsI",
    title: "A first meetup",
    image:
      "https://prod-tieinup-users-images.s3.ap-south-1.amazonaws.com/1607613132483-1607613132412-images_%287%29.jpeg",
    address: "some address",
    description: "this is a frist meetup",
  },
  {
    id: "I",
    title: "A second meetup",
    image:
      "https://prod-tieinup-users-images.s3.ap-south-1.amazonaws.com/1607613187084-1607613187041-images_%288%29.jpeg",
    address: "some second address",
    description: "this is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(Context) {
//   const req = Context.req;
//   const res = Context.res;

//   //fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 30,
  };
}

export default HomePage;

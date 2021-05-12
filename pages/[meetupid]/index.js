import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://prod-tieinup-users-images.s3.ap-south-1.amazonaws.com/1607613132483-1607613132412-images_%287%29.jpeg"
      title="First meetup"
      address="some address"
      description="some description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupid;
  // console.log(context);

  return {
    props: {
      meetupData: {
        image:
          "https://prod-tieinup-users-images.s3.ap-south-1.amazonaws.com/1607613132483-1607613132412-images_%287%29.jpeg",
      },
      title: "first meetup",
      address: "some addrevnslknvlskckvss",
      description: "some description",
    },
  };
}

export default MeetupDetails;

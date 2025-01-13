import { Fragment } from "react";
import MeetUpDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
export default function MeetuoDetails({ meetupData }) {
    console.log(meetupData)
    return <MeetUpDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        instructions={meetupData.instructions}
        description={meetupData.description}
    />


}
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://daveshubham99:WsmvdHlS3EKLM3tS@test1.lsgswcb.mongodb.net/meetups?retryWrites=true&w=majority&appName=test1')
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    const client = await MongoClient.connect('mongodb+srv://daveshubham99:WsmvdHlS3EKLM3tS@test1.lsgswcb.mongodb.net/meetups?retryWrites=true&w=majority&appName=test1')
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetup = await meetupCollection.findOne({ _id: new ObjectId(meetupId) });
    client.close();
    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                description: meetup.description,
                image: meetup.image

            }
            // {
            //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJsAFnntWouGLbQB2lbbEtSiutvDfxtomcQ&s',
            //     id: meetupId,
            //     title: 'First Meetup',
            //     address: '10,2883,NewYork America',
            //     description: 'The Meetup description'
            // }
        },
        revalidate: 10
    }
}
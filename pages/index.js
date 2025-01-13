import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head';
// const DUMMY_LIST = [
//     {
//         id: 'm12',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawq4OgLaIYhwYdmcmNbu0cGJ3IAAeIc8O2w&s',
//         title: 'First Meetup',
//         address: 'First Meet Place 10,2883 new york city',
//         description: 'Lets meet up with enthusiastically'
//     },
//     {
//         id: 'm2',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawq4OgLaIYhwYdmcmNbu0cGJ3IAAeIc8O2w&s',
//         title: 'second Meetup',
//         address: 'second Meet Place 10,2883 new york city',
//         description: 'Lets meet up with enthusiastically'
//     }
// ]
export default function HomePage(props) {
    return <Fragment>
        <Head>
            <title>React Meetup</title>
            <meta name='description' content='This is React Meetup Page Have a Opportunity to Establish connection' />
        </Head>
        <MeetupList meetups={props.meetups} /></Fragment>
}
// export function getServerSideProps(context) {
//     return {
//         props: {
//             meetups: DUMMY_LIST
//         }
//     }
// }

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://daveshubham99:WsmvdHlS3EKLM3tS@test1.lsgswcb.mongodb.net/meetups?retryWrites=true&w=majority&appName=test1')
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find().toArray();
    console.log(meetups)
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),

            }))
        },
        revalidate: 1
    }

}
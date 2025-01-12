import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUp() {
    const router = useRouter()
    async function onAddMeetup(enteredMeetupdata) {

        const response = await fetch('/api/newMeetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupdata),
            headers: { 'Content-Type': 'application/json' },
        })
        if (!response.ok) {
            console.log(response)
        }
        const data = await response.json();
        router.push('/')
    }
    return <NewMeetupForm onAddMeetup={onAddMeetup} />
}
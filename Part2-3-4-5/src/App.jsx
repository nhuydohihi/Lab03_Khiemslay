import UserProfile from './UserProfile'
import Counter from './Counter'
import Login from './Login'
import Card from './Card'
import Accordion from './Accordion'

export default function App() {
  const user1 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  }

  const user2 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
    imageSize: 90,
  }

  return (
    <>
      <Card title="User 1 Profile">
        <UserProfile userData={user1} />
      </Card>

      <Card title="User 2 Profile">
        <UserProfile userData={user2} theme="dark" />
      </Card>

      <Counter />
      <Login />
      <Accordion />
    </>
  )
}

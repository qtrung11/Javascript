import { useNavigate } from 'react-router'
import UserListItem from './components/mocules/sample-app-list'


const users = [
  { name: 'Compose Component', url: '/compose-component' },
  { name: 'Generate Box', url: '/generate-box' },
  { name: 'Page Guest Greeting', url: '/page-guest-greeting' },
  { name: 'Lifting State Up', url: "/lifting-state-up" },
]

function SampleApp() {
  const navigate = useNavigate()

  function handleUserDetail(url: string) {
    navigate(url)
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserListItem
            key={user.url + user.name}
            name={user.name}
            url={user.url}
            onDetail={handleUserDetail}
          />
        ))}
      </ul>
    </div>
  )
}

export default SampleApp
import { Outlet, useNavigate } from 'react-router'
import UserListItem from './components/mocules/sample-app-list'


const users = [
  { name: 'Compose Component', url: '/sample-app/compose-component' },
  { name: 'Generate Box', url: '/sample-app/generate-box' },
  { name: 'Page Guest Greeting', url: '/sample-app/page-guest-greeting' },
  { name: 'Lifting State Up', url: "/sample-app/lifting-state-up" },
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

      <br /> <br/>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default SampleApp
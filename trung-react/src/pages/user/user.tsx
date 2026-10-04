import { useNavigate } from 'react-router'
import Button from '../../components/atoms/button'

function User() {
  const navigate = useNavigate();
  function handleUserDetail() {
    navigate('/user/1')
  }
  return (
    <div>
      <ul>
        <li>
          Name: tony
          <Button onClick={handleUserDetail}>
            Detail
          </Button>
        </li>
        <li>
          Name: Trung
          <Button  onClick={handleUserDetail}>
            Detail
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default User
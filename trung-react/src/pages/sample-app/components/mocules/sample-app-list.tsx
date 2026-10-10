import Button from "../../../../components/atoms/button"


type UserListItemProps = {
  name: string
  url: string
  onDetail: (url: string) => void
}

function UserListItem({ name, url, onDetail }: UserListItemProps) {
  return (
    <li>
      Name: {name}
      <Button onClick={() => onDetail(url)}>
        Detail
      </Button>
    </li>
  )
}

export default UserListItem
import React from 'react'
import Button from '../../components/atoms/button'
import NotifcationModal from '../../components/organisms/modal/notifcation-modal';

interface IUser {
  id: number,
  name: string
}

function CommonConfirm() {
  const [name, setName] = React.useState('');
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [isOpenSuccessfully, setIsOpenSuccessfully] = React.useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal]  = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<IUser | null>(null)

  function addUser() {
    const newUser = {
      id: Date.now(),
      name
    };
    setUsers(prevState => [...prevState, newUser]);
    setName('');

    setTimeout(() => {
      setIsOpenSuccessfully(true);
    }, 500);
  }

  function onCloseSuccessModal() {
    setIsOpenSuccessfully(false)
  }

  function onCloseDeleteModal() {
    setIsOpenDeleteModal(false)
    setSelectedUser(null);
  }

  function onConfirmDeleteUser() {
    if (!selectedUser) return;
    setUsers(prevState => prevState.filter(user => user.id !== selectedUser.id));
    onCloseDeleteModal();
  }

  function openDeleteUserModal(user: IUser) {
    setSelectedUser(user);
    setIsOpenDeleteModal(true);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Demo use common component popup</h1>
      Name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <Button onClick={addUser}>
        Add User
      </Button>

      <br />

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Name
                </th>
                <th className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.id} className="bg-neutral-primary border-b border-default">
                  <td scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {user.name}
                  </td>
                  <td>
                    <Button variant='danger' onClick={() => openDeleteUserModal(user)}>
                      Delete User
                    </Button>
                  </td>
                </tr>   
              )
            })}
          </tbody>
        </table>
      </div>

      <NotifcationModal 
        isOpen={isOpenSuccessfully}
        onClose={onCloseSuccessModal}
      >
        Added user successufully!
      </NotifcationModal>

      <NotifcationModal 
        isOpen={isOpenDeleteModal}
        onClose={onCloseDeleteModal}
        buttonConfirm={
          <>
            <Button variant='danger' onClick={onConfirmDeleteUser}>Confirm</Button>
          </>
        }
      >
        User: {selectedUser?.name} will be deleted <br /> Are you sure?
      </NotifcationModal>
    </div>
  )
}

export default CommonConfirm
import Typography from "../../components/atoms/typography"
import Button from "../../components/atoms/button";

/* render component in jsx
  - PascalCase 
  - <xx> </xxx>
*/

function Props() {
  const book = {
    title: 'spiderman',
    year: 2005
  };

  function createTodo() {
    // cal api ...
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Props</h1>

      <Typography 
        {...book}
        text="Please enter ..."
        className="text-amber-800"
        name="Tony" // string
        showModal={true} // boolean
        onClick={() => {}} // function
        colors={['blue', 'green']} // array
        component={
          <Button 
            onClick={createTodo}
          >
          Create
        </Button>
        }
        component2={Button}
      />

      <br />
      <Button 
        onClick={createTodo}
      >
        Create
      </Button>
    </>
  )
}

export default Props
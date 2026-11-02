import React from 'react'
import Button from '../../components/atoms/button';

interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

/* useEffect
- no dependency: useEffect re-run every component re-render (include first render)
- emtpy dependency:  run once time for first render
- value dependency: re-run when values changes

clean up function: only run when component re-render or unmounts (not first render)
*/


// Get job stories: https://hacker-news.firebaseio.com/v0/jobstories.json
// Get job: https://hacker-news.firebaseio.com/v0/item/38667654.json

const PAGE_SIZE = 6
function UseEffect() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [number, setNumber] = React.useState(1);
  const [limit, setLimit] =  React.useState("1");
  const [jobStories, setJobStories] = React.useState<number[]>([]);
  const [page, setPage] = React.useState(0);
  const [jobs, setJobs] = React.useState<any>([])

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with no dependency')
  });

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependency')
  }, []);

  React.useEffect(() => {
    console.log('useEffect with fetch todo')
    async function fetchTodos() {
      try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        const data: any = await resp.json();
        setTodos(data);
      } catch (er) {
        console.log('can not fetch todo')
      }
    }
    fetchTodos();

    return () => {
      console.log('clean up useEffect with fetch todo')
    }
  }, [limit]);

  React.useEffect(() => {
    console.log('useEffect with no dependency');

    return () => {
      console.log('clean up useEffect with no dependency')
    }
  }); // re-run after every component re-render (include first render)

  React.useEffect(() => {
    console.log('useEffect with value dependency');

    return () => {
      console.log('clean up useEffect with value dependency')
    }
  }, [number]); // re-run after every component re-render (include first render)

  React.useEffect(() => {
    async function fetchJobStories() {
      try {
        const resp = await fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json`);
        const data = await resp.json();
        setJobStories(data);
      } catch (er) {
        console.log('can not fetch job stories')
      }
    }
    fetchJobStories();
  },[]);

  React.useEffect(() => {
    if (jobStories.length === 0) return;

    fetchJobs(page);
  }, [jobStories, page]) 

  async function fetchJobs(page: number) {
    // page = 1, 0 - 6, 
    const start = page * PAGE_SIZE; // 6
    const end = start + PAGE_SIZE; // 12
    const jobIdsByPage = [...jobStories].slice(start, end); 
    const allPromises = await jobIdsByPage.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(data => data.json()))
    const results = await Promise.all(allPromises)
    setJobs(prevState => [...prevState, ...results]);
  }

  console.log('--------------')
  console.log('Component render', {
    jobStories,
    page
  })
  return (
    <div>
      <h1 className="text-2xl font-bold">UseEffect</h1>
      <h3 className='font-bold'>Todos</h3>
      {todos.map(todo => (
        <div key={todo.id}>
          Title: {todo.title}
        </div>
      ))}
      Limit:
      <select value={limit} onChange={(event) => setLimit(event.target.value)}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>
      <br /><br />
      <h3 className='font-bold'>Number: {number}</h3>
      <Button onClick={() => setNumber(prevState => prevState + 1)}>
        Increment
      </Button>
      <br />
      <div className="boxEffect boxEffect1">box 1</div>
      <div className="boxEffect boxEffect2">box 2</div>
      <div className="boxEffect boxEffect3">box 3</div>
      <br />
      <h2 className='font-bold'>Demo Job Board</h2>

      {jobs.map(job => (
        <div key={job.id}>{job.title}</div>
      ))}

      <button type='button' className='cursor-pointer border' onClick={() => setPage(prevState => prevState + 1)}>Load more</button>
    </div>
  )
}

export default UseEffect
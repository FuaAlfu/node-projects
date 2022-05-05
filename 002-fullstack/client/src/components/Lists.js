import {useEffect,useState} from 'react'
import {axios} from 'axios';

const Lists = () => {
    const [items, setItems] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8080/route/items")
        //.then(response => console.log(response)); //for testing
        .then(response => setItems(response.data.items));
    },[]);

    if (items === null) return <div>loading..</div>
    return (
      <div>
          {items.map((item) => (
              <div key={item.id}>
                 {item.name}
              </div>
          ))}
      </div>
    );
}

export default Lists;

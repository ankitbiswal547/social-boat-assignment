import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import Cards from './components/Cards';

function App() {

  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);

  const [tagIndex, SetTagIndex] = useState({});

  const updateDataHandler = (d) => {
    let allTags = [];
    d.map((data, ind) => {
      return data.tags.map((tag, i) => {
        allTags.push({
          tagName: tag,
          status: "inactive"
        });
        return tag;
      })
    })

    const uniTags = {};
    allTags = allTags.filter((tag) => {
      if (!uniTags[tag.tagName]) {
        uniTags[tag.tagName] = true;
        return true;
      }
      return false
    });

    let indexObj = {};

    for (let i = 0; i < allTags.length; i++) {
      indexObj[allTags[i].tagName] = i;
    }

    SetTagIndex(indexObj);
    setTags(allTags);
    setData(d);
  }

  const changeStateOftags = (e, ind) => {
    e.target.classList.toggle("selected");
    let newTags = [...tags];
    newTags[ind].status = (newTags[ind].status === "active") ? "inactive" : "active";

    setTags(newTags);
  }

  return (
    <div className="App">
      <div className='navbar'>
        <div className='navbar-logo'>Social <span className='logo-right'>Boat</span></div>
        <Search onDataChange={updateDataHandler} />
        <div className='navbar-profile'>AB</div>
      </div>

      <div className='tags-area'>
        {tags.map((tag, ind) => {
          return <button className='tag-btn' onClick={(e) => { changeStateOftags(e, ind) }} key={ind}>{tag.tagName}</button>
        })}
      </div>

      <Cards data={data} tags={tags} indexObj={tagIndex} />
    </div>
  );
}

export default App;

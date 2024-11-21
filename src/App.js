import logo from './logo.svg';
import './App.css';
import { NavInshorts } from './components/NavInshorts';
import { useState, useEffect } from 'react';
import NewsContent from './components/NewsContent';
import axios from 'axios';
import { apiKey } from './data/apikey';
import Footer from './components/Footer';

function App() {

  const [category, setCategory] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  
  const [loadmore, setLoadmore] = useState(20)

 

  useEffect(() => {
    newsApi();
  
   
  }, [category, newsResult, loadmore])
  

  const newsApi = async () =>{
    try {

      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`)
      
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);

console.log(news.data.articles)

    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory}/>
      <NewsContent newsArray={newsArray} newsResult={newsResult} loadmore={loadmore} setLoadmore={setLoadmore}/>
      
      <Footer/>
    </div>
  );
}

export default App;

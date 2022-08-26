import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import NewsCard from '../Components/Cards/NewsCard';

import Form from 'react-bootstrap/Form';

export default function NewsApi() {

    const [news,setnews] = useState([]);

    const [country,setcountry] = useState('in');
    const [category,setcategory] = useState('business');

    const sendData = () =>{
        try {
            axios.post('http://localhost:5000/newsapi',{
            country: country,
            category: category,
        }).then((response) =>{
            if(response.status === 200){
                console.log("error: " + response.status);
                alert("Too Many Requests!");
            }
            else{
                setnews(response.data.articles);
                console.log("successfully retrieved");
            }
        });
        } catch (error) {
            alert("Server is Busy");
        }
        
    }
    


  return (
    <div className="mt-5 bg-[#2bc4a8]">
        <div>
        <div>
                        <h1 className='text-center'>Get Hot News Content of Your Country</h1>
                        <div className="mt-5 flex text-center justify-center">
                        <div className=" w-56 mb-4">
                        <Form.Select aria-label="Default select example"  onChange={(e) => setcountry(e.target.value) }>
                            <option>Select your Country</option>
                            <option value="in">India</option>
                            <option value="us">USA</option>
                            <option value="jp">Japan</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="cn">China</option>
                            <option value="fr">France</option>
                            <option value="de">Germany</option>
                            <option value="ph">Phillipines</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="sg">Singapore</option>
                            <option value="gb">United Kingdom</option>
                            <option value="ae">United Arab Emirates</option>
                        </Form.Select>
                        </div>

                        <div className="ml-3 w-56 mb-4">
                        <Form.Select aria-label="Default select example"  onChange={(e) => setcategory(e.target.value) }>
                            <option>Select your Category</option>
                            <option value="business">Business</option>
                            <option value="sports">Sports</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="technology">Technology</option>
                            <option value="health">Health</option>
                            

                        </Form.Select>
                        </div>

                        </div>

                        <div className='flex text-center justify-center ml-6'>
                        <Button onClick={sendData} varaiant="primary" >Get News</Button>
                        </div>
                    </div>
        </div>
        <div>
            {
                news.length < 1 && (
                    <div>
                        <h4 className="text-center mt-4"> Click on get news to get your current news on your country</h4>
                    </div>
                )
            }
        </div>
        <div>

            
        <div className="flex justify-center flex-wrap  m-3 mr-5 bg-[#eb8a8a]">
            
            {
         
               
          
                news.length >=1 && news.map((n,i)=>(
                    <div >
                     
                        <>
                        <NewsCard
                         nimages={n.urlToImage}
                         nauthor={n.author}
                         nurl={n.url}
                         ndescription={n.description}
                         ntitle={n.title}
                         index = {i}
                        />
                        </>
                        
                    </div>
                ))
    
            }
           

        </div>
        </div>
    </div>
  )
}

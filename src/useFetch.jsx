import { useState , useEffect } from "react"


export default function useFetch(url) {
    const [data , setData] = useState([])
    const [isloadig , setLoading]= useState(true)


        useEffect(()=>{
        // console.log("this page just got loaded from this hook effect")
        fetch(url)//promise use then if it fnish
            .then(res => {
                return res.json()
            })//another promise
            .then(data => {    //data from first promise
                setData(data)
                setLoading(false) // after finishing loading the data the loading is going away
            })
            .catch(err =>{
                alert(err.message)
                setLoading(false)
            })
    },[url]) //[] makes it load once 

    return {data , isloadig};

}

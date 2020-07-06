import React,{useState}  from 'react'

import Axios from 'axios'
/*
 request.userId = req.body.id;
  request.userId = req.body.id;
    request.detail = req.body.detail;
    request.title = req.body.title;
    request.category = req.body.category;
    request.createdAt = moment().format('YYYY-MM-DD HH:mm:ss'); 
    request.deadLine = req.body.deadLine;
    request.tags = req.body.tags;


*/

const Enroll = () => {
    const [tags, setTags] = useState([]); 
    let title = React.createRef();
    let detail = React.createRef();
    let category = React.createRef();
    let deadLine = React.createRef();
    let tag = React.createRef();
    

    // this.title.current.value
    const putTag = () => {
        console.log(tag.current.value);
        
        
        setTags([
            ...tags,
            {tag : tag.current.value}
        ]);

        tag.current.value = '';

        console.log(tags);
    }
    const deleteTag = () => {
        const idx = 
            tags.findIndex(value => value.tag ===  tag.current.value);
            tags.splice(idx, 1);

        setTags(
            tags,
        );
        tag.current.value = '';
    }

    let test = {
        detail : '상세정보',
        id : localStorage.getItem('userID'),
        token : localStorage.getItem('userToken'),
        title : "타이틀",
        category : "카테고리 it",
        deadLine : 9,
        tags : [{tag : 'tag1'}, {tag : 'tag2'}],
    }

    const putAll = () => {
        Axios.post('/api/enroll/enroll', /*{
            detail : detail.current.value,
            id : localStorage.getItem('userID'),
            token : localStorage.getItem('userToken'),
            title : title.current.value,
            category : category.current.value,
            deadLine : deadLine.current.value,
            tags : tags,
        }*/test);

    }

    return (
        <div>
            tag : <input type = "text" ref = {tag}/> 
            <button onClick = {putTag}>
                putTag
            </button>
            <button onClick = {deleteTag}>
                deleteTag
            </button>
            <br></br>

            <br></br>
            title : <input type = "text" ref = {title}/>
            <br></br> 
            detail : <input type = "text" ref = {detail}/> 
            <br></br>
            category : <input type = "text" ref = {category}/> 
            <br></br>
            deadLine : <input type = "text" ref = {deadLine}/> 
            <br></br>
            <button onClick = {putAll}>
                putAll
            </button>


        </div>
    )
}

export default Enroll;
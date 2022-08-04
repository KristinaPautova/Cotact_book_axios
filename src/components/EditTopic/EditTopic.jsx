import React, {useContext, useEffect, useState} from 'react';
import './editTopic.css'
import {Link, useParams} from "react-router-dom";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {topicsContext} from "../../context/TopicContextProvider";

const EditTopic = () => {

    const {editTopicPatch, topicDetailsObj, getTopicDetails} = useContext(topicsContext)

    const [editTitle, setEditTitle] = useState(topicDetailsObj.title);
    const [editDescription, setEditDescription] = useState(topicDetailsObj.description);
    const [editImage, setEditImage] = useState(topicDetailsObj.image);
    const [editLib, setEditLib] = useState(topicDetailsObj.lib);

    let {id} = useParams()

    useEffect(() => {
        getTopicDetails(id)
    },[id])

    function handleClick(){
        let editedTopic = {
            title: editTitle,
            description: editDescription,
            image: editImage,
            lib: editLib,
        }

        editTopicPatch(id,editedTopic)
    }


    return (
        <>
            <div className="containerAddTopic">
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
                    <FormControl
                        placeholder="Добавьте название"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setEditTitle(e.target.value)}
                        value={editTitle}
                    />
                </InputGroup>
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
                    <FormControl
                        placeholder="Добавьте описание"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setEditDescription(e.target.value)}
                        value={editDescription}
                    />
                </InputGroup>
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
                    <FormControl
                        placeholder="Вставьте ссылку на картинку"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setEditImage(e.target.value)}
                        value={editImage}
                    />
                </InputGroup>
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
                    <FormControl
                        placeholder="Вставьте ссылку на информацию"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setEditLib(e.target.value)}
                        value={editLib}
                    />
                </InputGroup>
                <Link to='/list'>
                    <Button onClick={handleClick} className="addTopic-btn">Сохранить</Button>
                </Link>
            </div>


        </>
    );
};

export default EditTopic;
import {useParams, useNavigate} from 'react-router-dom';

const Cat = () => {
    const params = useParams();
    const Navigate = useNavigate();
    console.log(params)
    return  <div>
    <h1>고양이 화면입니다</h1>
    <button onClick={()=>{
        Navigate("/");
    }}>메인 화면 가기</button>
    </div>
}

export default Cat;
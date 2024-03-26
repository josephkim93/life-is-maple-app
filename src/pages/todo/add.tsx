export default function Add() {
    return (
        <div>
            <h1>
                일일 퀘스트 추가
            </h1>
            <span>
                추가할때는 신중하게..!
            </span>
            <span>
                내일은 없어요. 오늘부터^^
            </span>
            <div>
                <label>
                    제목
                </label>
                <input type="text"/>
            </div>
            <a href="today">
                추가
            </a>
            <a href="today">
                취소
            </a>
        </div>
    )
}
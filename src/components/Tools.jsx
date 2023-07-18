import { elements } from './Elements'

function Tools(i) {
    return elements[i].tools.map(el =>
        <div className="skill-item white-btn cursor-cross" key={el}>{el}</div>
    )
}

export default Tools
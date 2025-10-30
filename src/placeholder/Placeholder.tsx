import { createSignal } from "solid-js";
import './Placeholder.css'




function Placeholder() {
    const [count, setCount] = createSignal(0);

    return(
        <>
        <h2>
            Placeholder Page
        </h2>

        <p>
            Here, have an interactive button
        </p>

        <div class="card">
            <button onClick={() => setCount((count) => (count + 1))}>
                Clicks: {count()}
            </button>
        </div>
        </>
    )
}

export default Placeholder;


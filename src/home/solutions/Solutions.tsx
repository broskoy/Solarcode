import { For } from 'solid-js';
import { categories } from './categories';
import { A } from '@solidjs/router';
import './Solutions.css';




function Solutions() {
  return (
    <>
        <h2>
            Enterprise Solutions
        </h2>

        <div class="category-cards-container">
        <For each={categories}>
            {(category) => (
            <A href="/placeholder" class="category-card-link">
              <div class="category-card">
                  {/* Optional: You could add category.icon here */}
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
              </div>
            </A>
            )}
        </For>
        </div>
    </>
  );
}

export default Solutions;
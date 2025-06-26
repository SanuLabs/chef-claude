import React from "react"
import ReactMarkdown from "react-markdown"

const ClaudeRecipe = React.forwardRef(function ClaudeRecipe({ recipe }, ref) {
    return (
        <section ref={ref}>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </article>
        </section>
    )
})

export default ClaudeRecipe

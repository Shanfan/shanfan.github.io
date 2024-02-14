import projectData from "./projectMeta.json" assert {type: 'json'}

const wrapper = document.querySelector(".projects-wrapper")

projectData.forEach(d => {
    const card = document.createElement('a')
    const image = document.createElement('img')
    const header = document.createElement('h2')
    const blurb = document.createElement('p')
    const tags = document.createElement('div')

    image.src = "/images" + d.imageUrl
    header.innerHTML = d.title
    blurb.innerHTML = d.description
    card.href = d.link
    card.classList = ["project-card"]
    card.appendChild(image)
    card.appendChild(header)
    card.appendChild(blurb)

    tags.classList = ["tags"]

    d.tags.forEach(tag => {
        const span = document.createElement('span')
        span.innerHTML = tag
        tags.appendChild(span)
    })

    card.appendChild(tags)
    wrapper.appendChild(card)
})

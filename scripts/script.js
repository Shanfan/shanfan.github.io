import projectData from "./projectMeta.json" assert {type: 'json'}

const renderTagCloud = () => {
    const allProjectsBtn = document.createElement('button')
    allProjectsBtn.onclick = () => {
        const cards = document.querySelectorAll(".project-card")
        cards.forEach(e => {
            e.classList.remove("hidden")
        })
    }

    allProjectsBtn.innerText = "All Projects (" + projectData.length + ")"
    document.querySelector(".tag-cloud").appendChild(allProjectsBtn)

    const tagCounts = {}
    projectData.forEach(d => {
        d.tags.forEach(tag => tagCounts[tag] = (tagCounts[tag] || 0) + 1)
    })

    const tagsAll = Object.keys(tagCounts).map(tag => {
        return { tag: tag, count: tagCounts[tag] }
    })

    tagsAll.forEach(t => {
        const tagBtn = document.createElement("button")
        tagBtn.innerHTML = t.tag + "(" + t.count + ")"
        tagBtn.style.fontSize = 1 + Math.log10(t.count) + "em"
        tagBtn.onclick = () => filterProject(t.tag)

        document.querySelector(".tag-cloud").appendChild(tagBtn)
    })
}

const classifyPhrase = (string) => string.toLowerCase().replace(/,| /g, "-")

const renderProjects = (data) => {
    data.forEach(d => {
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
            card.classList.add(classifyPhrase(tag))
            const span = document.createElement('span')
            span.innerHTML = tag
            tags.appendChild(span)
        })

        card.appendChild(tags)
        document.querySelector(".projects-wrapper").appendChild(card)
    })
}

const filterProject = (tag) => {
    const cards = document.querySelectorAll(".project-card")
    cards.forEach(e => {
        e.classList.remove("hidden")
        if (!e.classList.contains(classifyPhrase(tag))) {
            e.classList.add("hidden")
        }
    })
}

//Add a Reset button

renderTagCloud();
renderProjects(projectData)
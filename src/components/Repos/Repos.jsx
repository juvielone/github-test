import React from 'react'
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
    return repos.map((repo) => <RepoItem eachRepo={repo} key={repo.id} />)
}


export default Repos;
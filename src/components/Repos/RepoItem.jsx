import React from 'react'

const RepoItem = ({ eachRepo }) => {
    return (
        <div className="card">

            <h3>
                <a href={eachRepo.html_url}>{eachRepo.name}</a>
            </h3>

        </div>
    )
}

export default RepoItem;
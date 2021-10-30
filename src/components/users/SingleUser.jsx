import React, { useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

function SingleUser({ match }) {

    const githubContext = useContext(GithubContext);

    const { singleUser, loading, getUser, getUserRepos, repos, } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);


    const { name, avatar_url, location, bio, blog, login, html_url, company,
        followers, following, public_repos, public_gists,
        hireable } = singleUser;

    if (loading) return <Spinner />;

    return (
        <Fragment>

            <Link to="/" className="btn btn-light" >
                Back to Search
            </Link>

            <div className="card grid-2">

                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{ width: "150px" }} />

                    <h1>{name}</h1>
                    <p>Location: {location}</p>

                </div>


                <div className="">
                    {bio && (<Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>)}

                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>

                    <ul>
                        <li>
                            {login && <Fragment>
                                Username: {login}
                            </Fragment>}
                        </li>


                        <li>
                            {blog && <Fragment>
                                Website: {blog}
                            </Fragment>}
                        </li>



                        <li>
                            {company && <Fragment>
                                Company: {company}
                            </Fragment>}
                        </li>


                    </ul>

                </div>


            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>

            </div>

            <Repos repos={repos} />


        </Fragment>
    )

}

export default SingleUser;
function Forum() {
    return (
        <div>
            <div className="tittel"><p className="archivo">Navn og skole e-post</p></div>

            <div className="forumSection">
                <div className="forumBoks">
                    <input className="navnBoks archivo" type="text" placeholder="Navn"/>
                    <input className="epostBoks archivo" type="email" placeholder="Skole e-post"/>
                </div>
            </div>

            <div className="bunn"><p className="archivo">Nettside laget av Niksan og Zulihan 2IMIT</p></div>

        </div>
    );
}

export default Forum;
import React, { ChangeEvent } from 'react';

interface FormState {
    targetText: string
    melodicPattern: string
    rootNote: string
    output: string
}

class RequestForm extends React.Component<any, FormState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            targetText: "Buffalo Bilbo Baggins",
            melodicPattern: "Natural minor scale",
            rootNote: "C#/Db",
            output: ""
        };
        console.log("This where a server call would be made to populate melodic patterns dropdown");
        this.submit = this.submit.bind(this);
        this.updateTargetText = this.updateTargetText.bind(this);
        this.updateMelodicPattern = this.updateMelodicPattern.bind(this);
        this.updateRootNote = this.updateRootNote.bind(this);
    }

    populateMelodicPatterns() {
        const patterns = [
            "Major scale",
            "Natural minor scale",
            "Dorian mode",
            "Dominant 7 Chord"
        ]
        return patterns.map((n) => {
            return (
                <option key={n} value={n}>{n}</option>
            )
        });
    }

    populateRootNotes() {
        const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
        return notes.map((n) => {
            return (
                <option key={n} value={n}>{n}</option>
            )
        });
    }

    updateTargetText(event: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ ...this.state, targetText: event.target.value });
    }

    updateMelodicPattern(event: any) {
        this.setState({ ...this.state, melodicPattern: event.target.value });
    }

    updateRootNote(event: any) {
        this.setState({ ...this.state, rootNote: event.target.value });
    }

    submit() {
        this.setState({ ...this.state, output: `Target text: ${this.state.targetText} melodic pattern: ${this.state.melodicPattern} and root note: ${this.state.rootNote}` });
    }

    render() {
        return (
            <div>
                Text to Tonal Notes Generator
                <div>
                    <div>
                        Text to transform:
                        <textarea value={this.state.targetText} onChange={this.updateTargetText} />
                    </div>
                    <div>
                        Melodic Pattern:
                        <select value={this.state.melodicPattern} onChange={this.updateMelodicPattern}>
                            {this.populateMelodicPatterns()}
                        </select>
                    </div>
                    <div>
                        Root Note:
                        <select value={this.state.rootNote} onChange={this.updateRootNote}>
                            {this.populateRootNotes()}
                        </select>
                    </div>
                    <button onClick={this.submit}>Generate</button>
                </div>
                <div>
                    Output:
                    <div id="output">
                        {this.state.output}
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestForm
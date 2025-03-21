import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "WordPress Developer",
                    "Software Tester",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default TypeWriter;

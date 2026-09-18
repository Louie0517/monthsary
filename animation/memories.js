 function disableScroll() {
            document.body.classList.add('no-scroll');
        }
 
        function enableScroll() {
            document.body.classList.remove('no-scroll');
        }
 
        function monthsaryMessage() {
            disableScroll();
            
            const letter = {
                msg: document.getElementById("letter"),
                text: `
        Another month has passed and I still can't believe how lucky I am to have you.
        Every day with you feels like a celebration of how special you make me feel.
        Thank you for being the most amazing person I could ask for.
        Here's to many more months of laughter, love, and beautiful memories together.
        I love you so much, Roi.
        `,
                index: 0
            };
            typeWriter(letter);
        }
 
        function typeWriter(letter) {
            const oldCursor = document.querySelector('.cursor');
            if (oldCursor) {
                oldCursor.remove();
            }
 
            if (letter.index < letter.text.length) {
                const char = letter.text.charAt(letter.index);
                
                if (char === '\n') {
                    letter.msg.textContent += char;
                } else {
                    letter.msg.textContent += char;
                }
                
                letter.index++;
 
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                letter.msg.appendChild(cursor);
 
                const messageSection = document.querySelector('.container');
                if (messageSection) {
                    messageSection.scrollIntoView({ 
                        behavior: 'auto',
                        block: 'end'
                    });
                }
 
                setTimeout(() => typeWriter(letter), 80);
            } else {
                const cursor = document.querySelector('.cursor');
                if (cursor) {
                    cursor.remove();
                }
 
                enableScroll();
            }
        }
 
    
        window.addEventListener('load', () => {
            setTimeout(monthsaryMessage, 900);
        });
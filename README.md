# ![WebApp](https://github.com/ali-dot-com/Taxy/blob/main/frontend/public/images/1.png)
# Taxy
<table>
<tr>
<td>
Taxy streamlines tax form data extraction and enables interactive conversations about extracted information using an AI chatbot. Users effortlessly extract essential data from forms like W-2 and gain insights through natural language interactions.
</td>
</tr>
</table>


## Demo
Here is a working live demo :  https://taxy.vercel.app/chat
Step 1: Upload a w-2 pdf by clicking on the "Choose File" Button
Step 2: Click on the "Attach" button to upload and extract the pdf data from the OCR. You'll get a notification after successfull data extraction.
Step 3: Enter the prompt and keep chatting about your Forms!

## Site

### Chat Page
Currently it does not support the chat history but the basic chat functionalities are working

![](https://github.com/ali-dot-com/Taxy/blob/main/frontend/public/images/2.png)

### Pricing
![](https://github.com/ali-dot-com/Taxy/blob/main/frontend/public/images/3.png)


## [Usage](https://taxy.vercel.app/chat) 

### Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

### Bug / Feature Request

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/ali-dot-com/Taxy/issues/new). Please include sample queries and their corresponding results.


## Built with 

- [NextJS](https://nextjs.org/) - NextJS For Functional, Modular and Modern Chat Interface
- [Open-AI API](https://openai.com/index/openai-api) -  Rich Response Generation for the w-2 forms.
- [NodeJS](https://nodejs.org/en) - With a list of numbers of npm packages supported and great performance for real-time applications


## To-do
- Add chat history
- Add pure functional Database to handle the history, users and more...
- Dockerize the project


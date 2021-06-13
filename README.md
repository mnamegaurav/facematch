# Face Match

This is a Web Application which matches your Query image to your Reference Database and then retrieving the image from the database with the highest similarity.

You can find the project [Live](https://mnamegaurav-facematch.netlify.app/) here.

### This is how this application works -

1.  Upload two images (target) with which you will compare the query (from webcam).

2.  Once uploaded, use [face-api](https://github.com/justadudewhohacks/face-api.js/) library to crop the uploaded images.

3.  Prompt a message to re-upload if more than one face is in the image. Imagine a police database where officers upload a single front-facing image.

4.  Ask User to add a query image.

5.  Use the [face-api](https://github.com/justadudewhohacks/face-api.js/) to crop the face from the query image and display them.

6.  If query image has multiple faces, let user choose one of those.

7.  Now use SkylarkLabs Face Recognition https endpoint(given below) to display the face with most similarity.
    [https://skylark-test-site.scrollhelp.site/FMAD/Face-Recognition-API.81821697.html]

8.  The API matches two cropped faces and returns the similarity.

> _NOTE : Reference Image / Target Image is the suspect whom you want to find out in Query Image._

### Set this project locally (through docker) :computer:

1. Open terminal / command prompt and Clone the project using

   ```bash
   $ git clone https://github.com/mnamegaurav/facematch.git
   ```

2. Install docker and run this command in your system:

   ```bash
   $ sudo docker build -t facematch:latest .
   ```

3. Run this project:

   ```bash
   $ sudo docker run --name facematch -d -p 3000:3000 facematch:latest
   ```

4. Now you are good to go, Open browser and go to [`http://localhost:3000`](http://localhost:3000).

### Set this project locally (manual process) :computer:

1. Open terminal / command prompt and Clone the project using

   ```bash
   $ git clone https://github.com/mnamegaurav/facematch.git
   ```

2. Install `npm` dependecies.

   ```bash
   $ npm install
   ```

3. Signup for the API key of SkyLark in and paste it in the `.env.example` and rename this file to `.env`.

4. Start the development server:

   ```bash
   $ npm start
   ```

5. Now you are good to go, Open the browser and go to [`http://localhost:3000`](http://localhost:3000).

# Thanks

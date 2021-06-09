# Face Recognition

#### This is a Web Application which matches your Query image to your Reference Database and then retrieving the image from the database with the highest similarity.

The objective of this exercise is to evaluate your familiarity with
    - Rest APIs
    - React

#### This is how this application works -

    1.  Upload two images (target) with which you will compare the query (from webcam).

    2. Once uploaded, use [face-api](https://github.com/justadudewhohacks/face-api.js/) library to crop the uploaded images.

    3. Prompt a message to re-upload if more than one face is in the image. Imagine a police database where officers upload a single front-facing image.

    4 Ask User to add a query image.

    5 Use the [face-api](https://github.com/justadudewhohacks/face-api.js/) to crop the face from the query image and display them.

    6. If query image has multiple faces, let user choose one of those.

    7. Now use SkylarkLabs Face Recognition https endpoint(given below) to display the face with most similarity.
    [https://skylark-test-site.scrollhelp.site/FMAD/Face-Recognition-API.81821697.html]

    8. The API matches two cropped faces and returns the similarity.

> *NOTE : Reference Image / Target Image is the suspect whom you want to find out in Query Image.*

You can use Face recognition api documentation -
[https://skylark-test-site.scrollhelp.site/FMAD/Face-Recognition-API.81821697.html]
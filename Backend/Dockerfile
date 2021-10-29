FROM python:3.8.6

COPY . ./
RUN pip install -r requirements.txt
EXPOSE 8080
ENTRYPOINT [ "python" ]
CMD [ "app.py","run","--host","0.0.0.0"] 

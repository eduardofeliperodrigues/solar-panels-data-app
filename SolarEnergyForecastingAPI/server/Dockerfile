FROM python:3.10.7

RUN pip install Flask gunicorn flask_restful pandas flask_cors sklearn scikit-learn requests openpyxl

COPY src/ app/
WORKDIR /app

ENV PORT 8080

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app
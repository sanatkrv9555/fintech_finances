# # app.py (backend)
# from flask import Flask, request, send_file
# from flask_cors import CORS
# import yfinance as yf
# import matplotlib.pyplot as plt
# import io

# app = Flask(__name__)
# CORS(app)  # Allow cross-origin requests

# @app.route("/plot", methods=["GET"])
# def plot_stock():
#     stock = request.args.get('stock', 'GOOG')  # Default to GOOG if none passed
#     start = '2012-01-01'
#     end = '2022-12-21'
#     data = yf.download(stock, start=start, end=end)

#     if data.empty:
#         return "No stock data found", 404

#     data['100ma'] = data['Close'].rolling(100).mean()

#     plt.figure(figsize=(10, 5))
#     plt.plot(data['Close'], label='Close Price', color='green')
#     plt.plot(data['100ma'], label='100-Day MA', color='red')
#     plt.title(f'{stock} Stock Price')
#     plt.xlabel('Date')
#     plt.ylabel('Price')
#     plt.legend()

#     buf = io.BytesIO()
#     plt.savefig(buf, format='png')
#     buf.seek(0)
#     plt.close()

#     return send_file(buf, mimetype='image/png')

# if __name__ == '__main__':
#     app.run(debug=True, port=5001)

from flask import Flask, request, send_file
from flask_cors import CORS
import yfinance as yf
import matplotlib.pyplot as plt
import io

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

@app.route("/plot", methods=["GET"])
def plot_stock():
    stock = request.args.get('stock', 'GOOG')  # Default: GOOG
    start = '2012-01-01'
    end = '2022-12-21'

    try:
        data = yf.download(stock, start=start, end=end, auto_adjust=True)

        if data.empty or 'Close' not in data:
            return f"No valid data found for stock: {stock}", 404

        # Calculate 100-day and 200-day moving averages
        data['100ma'] = data['Close'].rolling(100).mean()
        data['200ma'] = data['Close'].rolling(200).mean()

        # Plotting
        plt.figure(figsize=(10, 5))
        plt.plot(data['Close'], label='Close Price', color='green', linewidth=1.2)
        plt.plot(data['100ma'], label='100-Day MA', color='orange', linestyle='--')
        plt.plot(data['200ma'], label='200-Day MA', color='blue', linestyle='--')
        plt.title(f"{stock.upper()} Stock Price with 100 & 200-Day Moving Averages")
        plt.xlabel("Date")
        plt.ylabel("Price (₹)")
        plt.legend()

        # Save the plot to a BytesIO buffer
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        plt.close()

        return send_file(buf, mimetype='image/png')

    except Exception as e:
        return f"Error generating chart: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)

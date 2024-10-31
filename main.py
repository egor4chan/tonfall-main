from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def MainPage():
    return render_template('start.html')

@app.route('/game')
def BoardPage():
    return render_template('board.html')

@app.route('/shop')
def ShopPage():
    return render_template('shop.html')

@app.route('/frens')
def FrensPage():
    return render_template('frens.html')

@app.route('/top')
def TopPage():
    return render_template('top.html')

@app.route('/tasks')
def TasksPage():
    return render_template('tasks.html')



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
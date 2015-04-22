from flask import Flask
from flask import render_template,url_for
app = Flask(__name__)
@app.route('/')
def main_page(name=None):
    return  render_template('app_page.html', name=name)

@app.route('/box')
def box():
    return render_template('box.html')

@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/candle')
def candle():
    return render_template('candle_stick.html')

@app.route('/login')
def login(): 
    pass

@app.route('/user/<username>')
def profile(username):
    pass

if __name__ == '__main__':
    app.debug = True
    app.run()


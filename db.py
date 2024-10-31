import sqlite3

class Data:

    db = sqlite3.connect('server.db', check_same_thread=False)
    cursor = db.cursor()

    def __init__(self):
        print('Event: Data class used.')
    
    def start_session(self, user_id, refer_id):
        try:
            self.cursor.execute("INSERT INTO data (user_id, refer_id) VALUES (?, ?)", (user_id, refer_id))
            self.db.commit()
            return True
        except:
            print('Event: UNIQE user')
            return False

data = Data()
data.start_session(1, 0)
        

        
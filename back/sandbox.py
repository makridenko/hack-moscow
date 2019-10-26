import random
import networkx as nx
import matplotlib.pyplot as plt

class User:
    def __init__(self, username):
        self.username = username
        self.rating = 0
        self.lessons_complexity = []

    def add_lesson(self, lesson_id, complex):
        self.lessons_complexity.append({lesson_id: complex})

    def __str__(self):
        return f'{self.username}'


class Lesson:
    def __init__(self, title, id):
        self.id = id
        self.title = title
        self.rating = 0

    def __str__(self):
        return f'{self.title}'

class LessonEdge:
    def __init__(self, Graph, from_, to_):
        Graph.add_edge(from_, to_)

    def __str__(self):
        return f'from {from_} to {to_}'


def main():
    #user1 = User(username='alex')

    #G = nx.Graph()
    '''
    for i in range(10):
        Lesson(
            title=f'lesson_{i}',
            id=i,
        )

    for i in range(10):
        user1.add_lesson(
            lesson_id=i,
            complex=random.random()*1,
        )

    print(user1.lessons_complexity)
    '''
    '''
    G = nx.Graph()
    G.add_edge('A', 'B', weight=4)
    G.add_edge('B', 'D', weight=2)
    G.add_edge('A', 'C', weight=3)
    G.add_edge('C', 'D', weight=4)

    nx.draw_planar(G, with_labels=True)
    plt.savefig("test.png")
    '''

    # общее количество заданий
    total_lessons = 1000

    # сколько пользователь решил задач
    user_lessons = 2

    # рейтинг пользователей на основе решенных им задач
    user_rating = 0.2

    # рейтинг задач по сложности
    lesson_rating = 0.95

    # оценка сложности задачи для пользователя
    user_koff_for_lesson = 1-(user_lessons/total_lessons)

    # решил ли пользователь задачу:
    # 0 - не решил
    # 0.5 - решил, но медленно
    # 1 - решил правильно
    user_answer = 1

    # предсказание на основе формулы Шахматного рейтинга Эло
    pred = 1/(1+10*(lesson_rating-user_rating)/400)

    # формирование нового рейтинга пользователя
    new_user_rating = user_rating + user_koff_for_lesson*(user_answer-pred)
    if new_user_rating < 0: new_user_rating = 0
    if new_user_rating > 1: new_user_rating = 1

    print(f'Рейтинг пользователя на момент решения задачи: {user_rating}')
    print(f'Рейтинг задачи на момент решения: {lesson_rating}')
    print(f'Оценка сложности решения задачи: {user_koff_for_lesson}')
    print(f'Новый рейтинг пользователя: {new_user_rating}')



main()

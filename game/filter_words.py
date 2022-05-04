import json


def main():
    with open('words_dictionary.json') as f:
        data = json.load(f)
        for key in data:
            if len(key) == 3:
                print(key)


if __name__ == '__main__':
    main()
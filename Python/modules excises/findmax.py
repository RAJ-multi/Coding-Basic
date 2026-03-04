def find_max(numbers):
    return max(numbers)


def interactive_loop():
    while True:
        try:
            number_input = input("Enter numbers (comma or space separated) or 'quit': ")
            if number_input.lower() == 'quit':
                break
            numbers = [int(x.strip()) for x in number_input.replace(",", " ").split()]
            result = find_max(numbers)
            print(f"Max: {result}\n")
        except ValueError:
            print("Invalid input!\n")


if __name__ == "__main__":
    interactive_loop()
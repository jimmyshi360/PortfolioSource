from collections import deque

#Explanation: Defining the chessboard and its rules
class chessboard:
  def __init__(self): 
    self.positions = [[0 for x in range(8)] for y in range(8)]
    positionNumber = 0
    for i in range(8):
			for j in range(8):
				self.positions[i][j] = positionNumber
				positionNumber = positionNumber + 1

  def positionNumberToCoordinates(self, positionNumber):
		for i in range(8):
			for j in range(8):
				if self.positions[i][j] == positionNumber:
					return (i, j)
		return (0, 0)
  
  rowMovement = [-1, 1, -1, 1, 2, -2, -2, 2]
  colMovement = [2, 2, -2, -2, 1, 1, -1, -1]

#Explanation: Defining a node to define the graph and perform breadth-first search .
class node:
	def __init__(self, x, y, distance):
		self.x = x
		self.y = y
		self.distance = distance
		self.visited = False

#Explanation: Performs a breadth-first search on the graph to find the  
#  the minimum number of moves needed to reach the destination.
def breadthFirstSearch(src, dest):
	queue = deque([])
	queue.append(src)
	while len(queue) != 0:
		currentNode = queue.popleft()
		x = currentNode.x
		y = currentNode.y
		distance = currentNode.distance
		if (x == dest.x and y == dest.y) :
			return distance
		if not currentNode.visited:
			node.visited = True
			for i in range(8):
				newX = chessboard.rowMovement[i] + x
				newY = chessboard.colMovement[i] + y
				if (newX >= 0 and newX <= 7 and newY >= 0 and newY <= 7):
					newNode = node(newX, newY, distance + 1)
					queue.append(newNode)
	return -1

#Setting up the chessboard, converting the positions into coordinates, and calling
#  the breadth-first search algorithm to traverse the graph.
def solution(src, dest):
	Chessboard = chessboard()
	(srcX, srcY) = Chessboard.positionNumberToCoordinates(src)
	(destX, destY) = Chessboard.positionNumberToCoordinates(dest)
	srcNode = node(srcX, srcY, 0)
	destNode = node(destX, destY, 0)
	return breadthFirstSearch(srcNode, destNode)
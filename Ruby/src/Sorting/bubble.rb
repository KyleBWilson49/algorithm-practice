class Array
  def bubbleSort(&prc)
    prc ||= Proc.new { |x, y| x <= y }
    array = self.dup
    sorted = false
    while !sorted do
      sorted = true
      i = 0
      while i < array.length - 1 do
        if !prc.call(array[i], array[i + 1])
          array[i], array[i + 1] = array[i + 1], array[i]
          sorted = false
        end
        i += 1
      end
    end
    array
  end
end

array = [5, 6, 2, 5, 3, 8, 1]
block = Proc.new { |x, y| x >= y }
puts array.bubbleSort

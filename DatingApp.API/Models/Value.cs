using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Models
{
    public class Value
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; } 
         
    }
}
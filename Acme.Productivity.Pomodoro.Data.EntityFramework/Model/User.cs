// <copyright file="User.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.EntityFramework.Model
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    [Table("Users")]
    public class User
    {
        /// <summary>
        /// Gets or sets the UserName.
        /// </summary>
        /// <value>The UserName.</value>
        [MaxLength(800)]
        [Required]
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets the Id.
        /// </summary>
        /// <value>The Id.</value>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets the Password.
        /// </summary>
        /// <value>The Password.</value>
        [MaxLength(800)]
        [Required]
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets the Password.
        /// </summary>
        /// <value>The Password.</value>
        [Required]
        public DateTime CreationDate { get; set; }

        /// <summary>
        /// Gets or sets the LastLoginDate.
        /// </summary>
        /// <value>The LastLoginDate.</value>
        [Required]
        public DateTime LastLoginDate { get; set; }
    }
}